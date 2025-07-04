import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./routes/Homepage/Homepage";
import CreatePage from "./routes/CreatePage/CreatePage";
import PostPage from "./routes/PostPage/PostPage";
import AuthPage from "./routes/AuthPage/AuthPage";
import SearchPage from "./routes/SearchPage/SearchPage";
import UserProfile from "./routes/UserProfile/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./utils/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
