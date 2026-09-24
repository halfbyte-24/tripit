import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper for inquiries
export const submitInquiry = async (data) => {
  // If we're using placeholder keys, just simulate success for the demo
  if (supabaseUrl.includes('placeholder')) {
    console.log('Mocking Supabase submit:', data);
    return { data, error: null };
  }
  
  return await supabase
    .from('inquiries')
    .insert([{
      name: data.name,
      phone: data.phone,
      email: data.email,
      destination: data.destination,
      travel_date: data.travel_date,
      travellers: data.travellers,
      message: data.message,
      status: 'New'
    }]);
};
