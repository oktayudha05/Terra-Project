/*
  Warnings:

  - Added the required column `saldo` to the `Pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pesanan` ADD COLUMN `saldo` INTEGER NOT NULL;
