/*
  Warnings:

  - Added the required column `berat` to the `Pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pesanan` ADD COLUMN `berat` INTEGER NOT NULL;
