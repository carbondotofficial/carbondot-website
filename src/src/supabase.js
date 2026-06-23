import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awzuiomcfmylmyncytem.supabase.co'
const supabaseKey = 'sb_publishable_H8XQbGcvvGjeZRlrnJPq4A_wVgek69V'

export const supabase = createClient(supabaseUrl, supabaseKey)