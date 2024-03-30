import { Contact, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ContactRepository {
  async create(data: Omit<Contact, 'id' | 'createdAt'>) {
    return await prisma.contact.create({
      data,
    });
  }
}

export const contactRepository = new ContactRepository();