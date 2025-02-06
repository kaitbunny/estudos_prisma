/*
  Warnings:

  - You are about to alter the column `phone` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE `Contact` MODIFY `phone` VARCHAR(11) NOT NULL;
