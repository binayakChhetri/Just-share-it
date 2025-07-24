import { supabase, supabaseUrl } from "../../../../supabase";

export const uploadFile = async (file: File, userId: string) => {
  const fileName = `${Math.random()}-${file.name}`
    .replaceAll("/", "")
    .replaceAll(" ", "");
  const filePath = `${supabaseUrl}/storage/v1/object/public/files/${fileName}`;
  const fileData = {
    name: file.name,
    size: file.size,
    type: file.type,
    path: filePath,
    uploaded_by: userId,
  };

  const { data, error } = await supabase
    .from("files")
    .insert([fileData])
    .select()
    .single();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  // Upload the file to Supabase storage
  const { error: storageError } = await supabase.storage
    .from("files")
    .upload(fileName, file);

  // Delete the file from Supabase storage if there was an error
  if (storageError) {
    await supabase.from("files").delete().eq("id", data.id);
    throw new Error("File upload failed ");
  }

  return data;
};

// Get all files uploaded by the specific user
export const getAllFiles = async (userId: string) => {
  const { data, error } = await supabase
    .from("files")
    // .select("*")
    .eq("uploaded_by", userId);
  if (error) {
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

// Get latest file uploaded by the specific user
export const getLatestFile = async (userId: string) => {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .eq("uploaded_by", userId)
    .order("created_at", { ascending: false })
    .limit(1);
  if (error) {
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

// Delete file from Supabase storage and database
export const deleteFile = async (id: number) => {
  // Delete from the table
  const { data, error } = await supabase

    .from("files")
    .delete()
    .eq("id", id)
    .select("*");

  // Delete from storage
  const fileName = data?.[0].path.split("/").pop();
  const { data: bucketData, error: bucketError } = await supabase.storage
    .from("files")
    .remove([fileName]);

  if (error || bucketError) {
    throw new Error("File could not be deleted");
  }
  return { data, bucketData };
};

// Get file by id
export const getFileById = async (id: number | string) => {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("File could not be loaded");
  }
  return data;
};
