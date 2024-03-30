import { contactRepository } from './ContactRepository';
import { Contact } from '@prisma/client';

class ContactService {
  async createContact(contactData: Omit<Contact, 'id' | 'createdAt'>) {
    return await contactRepository.create(contactData);
  }
}

export const contactService = new ContactService();