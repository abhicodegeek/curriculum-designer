import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Moc } from '../../schemas/moc.schema';

@Injectable()
export class MocService {
  constructor(@InjectModel('Moc') private readonly mocModel: Model<Moc>) {}

  // Corrected return type to Promise<Moc> and used await for save
  async createMoc(message: string): Promise<Moc> {
    const newMoc = new this.mocModel({ message });
    return await newMoc.save();
  }

  async getMocs(): Promise<Moc[]> {
    return this.mocModel.find().exec();
  }

  async updateMoc(id: string, message: string): Promise<Moc | null> {
    return this.mocModel
      .findByIdAndUpdate(id, { message }, { new: true })
      .exec();
  }

  async deleteMoc(id: string): Promise<void> {
    await this.mocModel.findByIdAndDelete(id).exec();
  }
}
