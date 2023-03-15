// React Boilerplate
import React, { useEffect, useState } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import MainPage from "./pages/MainPage";
import UserAmount from "./pages/UserAmount";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginPage from "./pages/LoginPage";
import DisplayDataPage from "./pages/DisplayDataPage";

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            {/* wrapper for everything routing related */}
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Routes>
                            {/* individual display route */}
                            <Route path="/test" element={<TestPage />} />
                            <Route
                                path="/DisplayDataPage"
                                element={<DisplayDataPage />}
                            />
                            <Route
                                path="/question"
                                element={<QuestionPage />}
                            />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/useramount"
                                element={<UserAmount />}
                            />
                            <Route path="/home" element={<HomePage />} />

                            {/* all other routes */}
                            <Route path="*" element={<MainPage />} />
                        </Routes>
                    </header>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
