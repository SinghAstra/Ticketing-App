import { NextResponse } from "next/server";
import Ticket from "../models/Ticket";

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  console.log("In the Post");
  try {
    const body = await req.json();
    console.log("body is ", body);
    const { formData } = body;
    console.log("formData is ", formData);
    const newTicket = await Ticket.create(formData);
    console.log("new Ticket is ", newTicket);
    return NextResponse.json(
      { message: "Ticket Created", newTicket },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
