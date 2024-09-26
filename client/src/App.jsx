// React Boilerplate
import React, { useEffect, useState } from "react"; // Commented out as they're not used
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   useQuery,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
// import { QUERY_ONE_USER, QUERY_me } from "./utils/queries"; // Commented out as they're not used

// test

// pages
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import ExpensesPage from "./pages/ExpensesPage";
// import Auth from "./utils/auth"; // Commented out as it's not used

function App() {
  // const { loading, error, data } = useQuery(QUERY_me); // Commented out as it's not used
  // isolate the DB data you need

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
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
