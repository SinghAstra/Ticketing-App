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
  try {
    const body = await req.json();
    const { formData } = body;
    const newTicket = await Ticket.create(formData);
    return NextResponse.json(
      { message: "Ticket Created", newTicket },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
