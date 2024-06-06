/*
  Warnings:

  - Added the required column `alamat` to the `Pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pesanan` ADD COLUMN `alamat` VARCHAR(191) NOT NULL;
