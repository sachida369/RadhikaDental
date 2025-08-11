import { type Appointment, type Contact, type InsertAppointment, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAppointments(): Promise<Appointment[]>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private appointments: Map<string, Appointment>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.appointments = new Map();
    this.contacts = new Map();
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      ...insertAppointment, 
      id, 
      createdAt: new Date() 
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
