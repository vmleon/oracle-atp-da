# Lab 1: Create Autonomous Database

![Autonomous](../images/adb_banner.png)

This lab walks you through the steps to get started using the **Oracle Autonomous Transaction Processing Database (ATP)** on **Oracle Cloud Infrastructure (OCI)**. You will provision a new database in just few minutes.

### Self-driving

Automates database provisioning, tuning, and scaling.

Provisions highly available databases, configures and tunes for specific workloads, and scales compute resources when needed, all done automatically.

### Self-securing

Automates data protection and security.

Protect sensitive and regulated data automatically, patch your database for security vulnerabilities, and prevent unauthorized access—all with Oracle Autonomous Database.

### Self-repairing

Automates failure detection, failover, and repair.

Detect and protect from system failures and user errors automatically and provide failover to standby databases with zero data loss.

Perfect for Developers!

## Create a new Autonomous Transaction Processing

Go to the **Autonomous Transaction Processing (ATP)** menu:

![Menu ATP](./../images/menu_atp.png)

In this lab we will show creating the database in the **root compartment**, which is acceptable for labs and quick tests. 

> Compartments are a logical separation of resources,  where you can attach roles and permissions. This allows you to create your team structure in compartments, so you can control who can manage and access resources. Compartments are not necessary at this stage.

And click in **Create Autonomous Database** button.

![ATPs](./../images/atps.png)

You can leave the compartment as it is. It will say something like _<tenancy_name> (root)_. Write the Display name and Database name.

Make sure you select **Transaction Processing** and **Shared Infrastructure**.

![ATP Creation](../images/atp_creation_1.png)

You can select **Always Free** configuration to start enjoying your Free Autonomous Database. You will have visible the **Always Free** logo next to the name of your database:

![Always Free Logo](../images/always_free_logo.png)

CPU and Storage are good with default values, the same for the database version.

Switch off Auto scaling (if your configuration is **Always Free** it will not be available to you. Autoscaling is a nice feature as the ATP database will scale if the workload is increasing and scale down automatically if the workload reduces. Zero downtime during the process. It's cool, isn't it?

Under the Create Administrator credentials section, provide the **Administrator Password**. Enter any password you wish to use following the specific requirements imposed by ATP.

> Reminder: Note your password in a safe location as this cannot be easily reset.

![ATP Creation](../images/atp_creation_2.png)

Select **Allow Secure Access From Everywhere** for the workshop and **License Included**.

Click **Create Autonomous Database** button.

![ATP Creation](../images/atp_creation_3.png)
![ATP Creation](../images/atp_creation_4.png)

After a few minutes you will have your new Autonomous Database up and running.

This page is known as the Autonomous Database Details Page. It provides you with status information about your database, and its configuration.  Get familiar with the buttons and tabs on this page.

![ATP Details](../images/atp_details.png)

Remember: You will have visible the **Always Free** logo next to the name of your database:

![Always Free Logo](../images/always_free_logo.png)

## It works

You  have just created an Autonomous Database with the latest features of Oracle Databases.

## Congratulations, you are ready for the next Lab!

---

[**<< Go to Sign Up**](../lab0/README.md) | [Home](../README.md) | [**Go to Lab 2 >>>>>**](../lab2/README.md)

