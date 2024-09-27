/*
  Warnings:

  - Added the required column `operasi` to the `Pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pesanan` ADD COLUMN `operasi` VARCHAR(191) NOT NULL;
