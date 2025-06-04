import { supabase } from '@/lib/supabaseClient'

export const incrementCounter = async (counterName: string) => {
  try {
    console.log(`🔍 incrementCounter開始: "${counterName}"`);
    
    // 現在の値を取得
    const { data, error } = await supabase
      .from('counters')
      .select('*')
      .eq('name', counterName)
      .single()

    console.log(`🎯 Supabaseから取得したデータ:`, data);
    console.log(`🎯 Supabaseエラー:`, error);

    // 🔧 改善：レコードが存在しない場合は自動作成
    if (error && error.code === 'PGRST116') {
      console.log(`📝 "${counterName}" カウンターが存在しないため新規作成中...`);
      
      const { data: newData, error: insertError } = await supabase
        .from('counters')
        .insert([{ name: counterName, value: 1 }])
        .select()
        .single();

      if (insertError) {
        console.error('❌ カウンター作成エラー:', insertError);
        return null;
      }

      console.log(`✅ "${counterName}" カウンター作成・初期化完了: 1`);
      return 1;
    }

    if (error) {
      console.error('❌ Supabase取得エラー詳細:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      return null;
    }

    if (!data) {
      console.error(`❌ データが存在しません: name="${counterName}"`);
      return null;
    }

    console.log(`✅ 取得成功: ${counterName} = ${data.value} → ${data.value + 1}`);

    // 値を更新
    const { data: updateData, error: updateError } = await supabase
      .from('counters')
      .update({ value: data.value + 1 })
      .eq('name', counterName)
      .select()

    console.log(`🔄 更新結果:`, updateData);
    console.log(`🔄 更新エラー:`, updateError);

    if (updateError) {
      console.error('❌ Supabase更新エラー詳細:', {
        message: updateError.message,
        details: updateError.details,
        hint: updateError.hint,
        code: updateError.code
      });
      return null;
    }

    console.log(`🎉 ${counterName} カウンター更新完了: ${data.value} → ${data.value + 1}`);
    return data.value + 1;
    
  } catch (error) {
    console.error(`❌ incrementCounter処理エラー (${counterName}):`, error);
    return null;
  }
}

// 現在のカウンター値を取得する関数も改善
export const getCounter = async (counterName: string) => {
  try {
    const { data, error } = await supabase
      .from('counters')
      .select('value')
      .eq('name', counterName)
      .single()

    // 🔧 改善：レコードが存在しない場合は0を返す
    if (error && error.code === 'PGRST116') {
      console.log(`ℹ️ "${counterName}" カウンターが存在しないため0を返します`);
      return 0;
    }

    if (error || !data) {
      console.error('❌ カウンター取得エラー:', error);
      return 0;
    }

    return data.value;
  } catch (error) {
    console.error('❌ カウンター取得処理エラー:', error);
    return 0;
  }
} 