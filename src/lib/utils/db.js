import { createClient } from '@supabase/supabase-js'
import { readable } from 'svelte/store'

console.log(import.meta.env.VITE_SUPABASE_URL)
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const user = readable(supabase.auth.user(), set => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_OUT') {
      set(null)
    }
  })
})

export const auth = supabase.auth

// TODO: add your queries/inserts/updates/deletes here
export const collections = {
  async all() {
    const { data } = await supabase
      .from('collections')
      .select('*')

    return data
  }
}