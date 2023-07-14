import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  )
  // DEMO Path: https://jbrhjumffzwlecoizvkb.supabase.co/storage/v1/object/public/cabin-images/0.6993614884904029-cabin-008.jpg
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  let query = supabase.from('cabins')

  if (!id) {
    // Create
    query = query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single()
  } else {
    // Update
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq('id', id)
      .select()
      .single()
  }

  const { data, error } = await query

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be created')
  }

  if (hasImagePath) return data

  // Upload image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error(
      'Cabin image colud not be uploaded and the cabin was not created'
    )
  }

  return data
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be delete')
  }
}
