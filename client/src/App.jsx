// React Boilerplate
import React, { useEffect, useState } from "react";
import {

  useQuery,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {  QUERY_me } from "./utils/queries";
// test

// pages
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import ExpensesPage from "./pages/ExpensesPage";

function App() {
  const { data } = useQuery(QUERY_me);
  // isolate the DB data you need.

  return (
    <Router>
      {/* wrapper for everything routing related */}
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* all other routes */}
            <Route path="/question" element={<QuestionPage />} />
            {/* needs below */}
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/expense" element={<ExpensesPage />} />
            <Route path="/home" element={<HomePage user={data?.me} />} />
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
