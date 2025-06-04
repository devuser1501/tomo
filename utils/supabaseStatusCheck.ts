import { supabase } from '@/lib/supabaseClient'

export const testSupabaseConnection = async () => {
  try {
    console.log('🔍 Supabase接続テスト開始');
    
    // 接続テスト
    const { data, error } = await supabase
      .from('counters')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Supabase接続エラー:', error);
      return { success: false, error };
    }

    console.log('✅ Supabase接続成功');
    return { success: true, data };
  } catch (error) {
    console.error('❌ Supabase接続テスト失敗:', error);
    return { success: false, error };
  }
}

export const getCurrentCounters = async () => {
  try {
    const { data, error } = await supabase
      .from('counters')
      .select('*');

    if (error) {
      console.error('❌ カウンター取得エラー:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('❌ カウンター取得処理エラー:', error);
    return null;
  }
}

// 🔧 新機能：必要なカウンターが存在しない場合は自動作成
export const ensureCountersExist = async () => {
  const requiredCounters = ['likes', 'pageViews', 'formSubmissions'];
  
  for (const counterName of requiredCounters) {
    try {
      console.log(`🔍 "${counterName}" カウンター確認中...`);
      
      // 存在確認
      const { data: existing, error: selectError } = await supabase
        .from('counters')
        .select('*')
        .eq('name', counterName)
        .single();

      if (selectError && selectError.code !== 'PGRST116') {
        // PGRST116は「レコードが見つからない」エラー以外は問題
        console.error(`❌ "${counterName}" 確認エラー:`, selectError);
        continue;
      }

      if (!existing) {
        console.log(`📝 "${counterName}" カウンターを新規作成中...`);
        
        // 新規作成
        const { data: inserted, error: insertError } = await supabase
          .from('counters')
          .insert([{ name: counterName, value: 0 }])
          .select();

        if (insertError) {
          console.error(`❌ "${counterName}" 作成エラー:`, insertError);
        } else {
          console.log(`✅ "${counterName}" カウンター作成完了:`, inserted);
        }
      } else {
        console.log(`✅ "${counterName}" カウンター確認済み: ${existing.value}`);
      }
    } catch (error) {
      console.error(`❌ "${counterName}" 処理エラー:`, error);
    }
  }
} 