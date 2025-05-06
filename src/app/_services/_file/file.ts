import { supabase, supabaseUrl } from "../../../../supabase";

export const uploadFile = async (file: File, userId: string): Promise<void> => {
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

  let query = supabase.from("files").insert([{ ...fileData }]);
  const { data, error } = await query.select().single();

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
export const getFile = async () => {
  let { data, error } = await supabase.from("files").select("*");
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

// Get latest file link uploaded by the specific user
export const getLatestFileLink = () => {};
