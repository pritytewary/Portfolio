import { connectDB } from "@/lib/db";
import Contact from "@/models/contacts";

export default async function getDataResult(sort) {
  try {
    await connectDB();

    const data = await Contact.find({}, undefined, {
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
