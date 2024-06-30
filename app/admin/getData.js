import { connectDB } from "@/lib/db";
import { ContactModel } from "@/models/contacts";

export default async function getDataResult(sort) {
  try {
    await connectDB();

    const data = await ContactModel.find({}, undefined, {
      sort: {
        createdAt: sort === "-1" ? -1 : 1,
      },
    });

    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      success: false,
      message: error.message,
    };
  }
}
