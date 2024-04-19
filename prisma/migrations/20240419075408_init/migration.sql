/*
  Warnings:

  - You are about to drop the column `cuid` on the `Video` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `Video` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `thumbnail` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Video_cuid_key` ON `Video`;

-- AlterTable
ALTER TABLE `Video` DROP COLUMN `cuid`,
    ADD COLUMN `thumbnail` VARCHAR(191) NOT NULL,
    ADD COLUMN `uuid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Video_uuid_key` ON `Video`(`uuid`);
