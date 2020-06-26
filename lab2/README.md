# Lab 2: Create Application and REST API

Each Autonomous Database instance includes Oracle REST Data Services (ORDS) and Simple Object Data Access (SODA) that provides HTTPS interfaces for working with the contents of your Oracle Database in REST enabled schemas.

## Simple Object Data Access (SODA)

Simple Oracle Document Access (SODA) for REST is a pre-deployed REST service that can be used to store JSON documents in an Autonomous Database.

SODA enables flexible, NoSQL-style application development without having to use SQL.

With SODA, JSON documents are stored in named collections and managed using simple CRUD operations (create, read, update and delete). And while SQL isn't required, JSON stored in SODA collections is still fully accessible from SQL when needed.

SODA for REST is deployed in ORDS under the following URL pattern:

`/ords/schema/soda/latest/*`

Where schema corresponds to the REST enabled database schema (for example, "admin").

Feel free to investigate more on the [SODA for REST documentation](https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/rest/index.html)

The first step is to enable `ADMIN` user to use SODA by running the following statement on SQL Developer Web:

```sql
GRANT SODA_APP TO admin;
```

## Use the REST API

We are going to work with collections that in our case will contain the jokes.

Create `jokes` collection by run `curl` on the terminal:

- Remember to change `<password>` with the ADMIN password you have for your Autonomous Database.
- Another substitution is for `<soda_instance_url>`, you can find this information on Service Console:

![SODA URL](../images/soda_url.png)

Run the command to create the collection:

```bash
curl -XPUT -u 'ADMIN:<password>' '<soda_instance_url>/admin/soda/latest/jokes'
```

Insert your first element in the collection with:

```bash
curl -XPOST -H "Content-Type: application/json" -u 'ADMIN:<password>' --data '{"text": "Never trust atoms; they make up everything."}' '<soda_instalce_url>/admin/soda/latest/jokes'
```

Insert your second element in the collection with:

```bash
curl -XPOST -H "Content-Type: application/json" -u 'ADMIN:<password>' --data '{"text": "My wife told me to stop impersonating a flamingo. I had to put my foot down."}' '<soda_instalce_url>/admin/soda/latest/jokes'
```

## It works

Look at the shape of the table behind SODA, go to SQL Developer Web and run:

```sql
DESCRIBE JOKES;
```

You will see something like this:

```bash
Name          Null?    Type
------------- -------- -------------
ID            NOT NULL VARCHAR2(255)
CREATED_ON    NOT NULL TIMESTAMP(6)
LAST_MODIFIED NOT NULL TIMESTAMP(6)
VERSION       NOT NULL VARCHAR2(255)
JSON_DOCUMENT          BLOB
```

**XXX** Explain a bit of the structure of the table

Check the content of the table `jokes` on SQL Developer Web:

```sql
SELECT * FROM JOKES;
```

How many rows do you see? You should have two rows in the table.

Do the same request with REST API:

```bash
curl -u 'ADMIN:<password>' '<soda_intance_url>/admin/soda/latest/jokes'
```

> `jq` is a lightweight and flexible command-line JSON processor. It will make your life easier when reading JSON responses. [Download jq](https://stedolan.github.io/jq/).

Congratulations! You are ready to go to the next Lab!

---

[**<< Prev**](../lab1/README.md) | [home](../README.md) | [**NEXT >>>>>**](../lab3/README.md)
