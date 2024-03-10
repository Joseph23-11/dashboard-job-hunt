import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerSession } from "next-auth";
import React, { FC } from "react";

interface SettingsPageProps {}

export const revalidate = 0;

const SettingsPage: FC<SettingsPageProps> = async ({}) => {
  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview"></TabsContent>
        <TabsContent value="socialLinks"></TabsContent>
        <TabsContent value="teams"></TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
