# Deployment Guide: Travel Budgeting Tool

Follow these steps to take your project from your local computer to the live web.

---

## Step 1: Prepare MongoDB Atlas (The Cloud Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2. Create a new **Cluster** (choose the free tier).
3. Under **Database Access**, create a user with a username and password.
4. Under **Network Access**, click "Add IP Address" and select **"Allow Access from Anywhere"** (0.0.0.0/0).
5. Go to **Database > Connect > Drivers** and copy your **Connection String**. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority`

---

## Step 2: Deploy Backend to Render
1. Create a free account on [Render](https://render.com/).
2. Push your `backend` folder to a **GitHub Repository**.
3. On Render, click **New > Web Service**.
4. Connect your GitHub repo and select the `backend` folder.
5. In **Environment Variables**, add:
   - `MONGODB_URI`: (Your Atlas connection string from Step 1)
   - `JWT_SECRET`: (Any long random string)
   - `NODE_ENV`: `production`
6. Render will give you a URL like `https://my-backend.onrender.com`. **Copy this URL.**

---

## Step 3: Link Frontend to Backend
1. Open your local `frontend/script.js`.
2. Find this line:
   ```javascript
   : 'https://your-backend-name.onrender.com/api';
   ```
3. Replace `https://your-backend-name.onrender.com` with your **actual Render URL** from Step 2.
4. Save the file.

---

## Step 4: Deploy Frontend to Vercel
1. Create an account on [Vercel](https://vercel.com/).
2. Push your `frontend` folder to a **GitHub Repository**.
3. On Vercel, click **Add New > Project**.
4. Import your frontend repo.
5. Click **Deploy**.
6. Vercel will give you a live link like `https://my-travel-app.vercel.app`.

---

## Summary of URL Flow
- **Browser** opens your **Vercel URL**.
*   **Vercel** (Frontend) sends data to your **Render URL**.
*   **Render** (Backend) saves data to your **MongoDB Atlas**.

**Congratulations! Your full-stack project is now live!**
