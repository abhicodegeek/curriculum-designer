import { Schema, Document } from 'mongoose';

// Moc interface, extending Document
export interface Moc extends Document {
  message: string;
}

// Moc Schema definition
export const MocSchema = new Schema({
  message: { type: String, required: true },
});

// Moc model name
export const Moc = 'Moc';
