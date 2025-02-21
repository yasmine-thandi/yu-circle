


## To Run on Local Machine:

```
git clone https://github.com/KarolinaTchiling/yu-circle.git
```

#### Frontend: React + TypeScript + Vite + TailwindCSS v.4


1. Install [bun](https://bun.sh/)

2. Install dependencies

```
cd frontend

bun install
```

3. Run Frontend

```
bun run dev
```

Tailwind Documentation (v.4): https://tailwindcss.com/docs/styling-with-utility-classes


#### Backend: Spring Boot + Postgres

Assuming you are using eclipse, follow these steps:

1. Open eclipse, and go to the top menu to select Help > Eclipse Marketplace.

2. Search for 'Spring Boot'.

3. Install Spring Tools 4.28.

4. Restart eclipse and import the project into your workspace.

5. Open the Azure website, find the yucircle database, and start it.

6. Back in eclipse, right click on the project folder and select Run As > Spring Boot App.


Example commands:
```
curl -X GET "http://localhost:8080/profiles/jdoe"

curl -X GET "http://localhost:8080/profiles"
```

Authentication:
```
curl -X POST http://localhost:8080/profiles/login \
     -H "Content-Type: application/json" \
     -d '{"username": "bob", "password": "password"}'
```