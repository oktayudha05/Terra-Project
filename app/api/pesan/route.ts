import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { user, berat, alamat, produk, biaya, bilangan } = await req.json();

  try {
    const data = await prisma.pesanan.create({
      data: {
        user,
        berat: parseFloat(berat),
        alamat,
        produk,
        operasi: bilangan == 'negatif' ? 'pengurangan' : 'penambahan',
        biaya: parseFloat(biaya),
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error creating pesanan:", error);
    return NextResponse.json({ error: "Error creating pesanan" }, { status: 500 });
  }
}
