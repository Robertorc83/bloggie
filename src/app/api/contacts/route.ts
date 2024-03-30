import { NextResponse, NextRequest } from 'next/server';
import { contactService } from './ContactService';

export async function POST(req: NextRequest, _res: NextResponse) {
   try {
      const body = await req.json();
      const contact = await contactService.createContact(body);
      return NextResponse.json(contact);
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 400 });
   }
}
