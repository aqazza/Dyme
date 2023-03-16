import React, { useState } from "react";
import "../styles/ExpenseStyles.css";
import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// queries
import { QUERY_ONE_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

function ExpensesPage() {
    const [expenses, setExpenses] = useState({
        rent: 0,
        lifestyle: 0,
        auto: 0,
        food: 0,
        health: 0,
        entertainment: 0,
        Miscellaneous: 0,
    });

    // retrieve the id from token to get specific user data
    const token = Auth.getProfile();
    const id = token.data._id;

    const { loading, error, data } = useQuery(QUERY_ONE_USER, {
        variables: { id },
    });

    // isolate the DB data you need
    const user = data?.user || [];

    // log in check
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    const expensesData = user.expenses;
    console.log(expensesData);

    //     const submitButton = document.getElementById("submit");

    // submitButton.addEventListener("click", (event) => {
    //   event.preventDefault(); // prevent the form from submitting and reloading the page

    //   const category = document.getElementById("category").value;
    //   const amount = document.getElementById("amount").value;
    //   const name = document.getElementById("name").value;

    //   // do something with the form data, for example:
    //   console.log(`Category: ${category}, Amount: ${amount}, Name: ${name}`);

    //   // clear the form fields
    //   document.getElementById("category").value = "rent";
    //   document.getElementById("amount").value = "";
    //   document.getElementById("name").value = "";
    // });

    return (
        <div className="expense-page">
            <div>
                <a href="/home">
                    <h1 className="exp-header">Expenses</h1>
                </a>
            </div>

            <div>
                {expensesData &&
                    expensesData.map((expense) => {
                        return (
                            <div id={expense._id}>
                                <div>{expense.name}</div>
                                <div>{expense.amount}</div>
                                <div>{expense.category}</div>
                            </div>
                        );
                    })}
            </div>

            <div class="expense-form">
                <h2>Add an expense:</h2>
                <div class="expense-inputs">
                    <div class="expense-category">
                        <label for="category">Category:</label>
                        <select id="category">
                            <option value="Rent & Living Expenses">
                                Rent & Living Expenses
                            </option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Auto & Transportation">
                                Auto & Transportation
                            </option>
                            <option value="Food & Dining">Food & Dining</option>
                            <option value="Health And Fitness">
                                Health And Fitness
                            </option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>
                    <div class="expense-amount">
                        <label for="amount">Amount: $</label>
                        <input type="text" id="amount" />
                    </div>
                    <div class="expense-name">
                        <label for="name">Label:</label>
                        <input type="text" id="name" />
                    </div>
                    <button id="submit">Submit</button>
                </div>
            </div>

            <ul className="accordion">
                <li className="accordion-item">
                    <input id="s1" className="hide" type="checkbox" />
                    <label for="s1" className="accordion-label">
                        Rent & Living Expenses
                    </label>
                    <p className="accordion-child">${expenses.rent}</p>
                </li>
                <li className="accordion-item">
                    <input id="s2" className="hide" type="checkbox" />
                    <label for="s2" className="accordion-label">
                        Lifestyle
                    </label>
                    <p className="accordion-child">${expenses.lifestyle}</p>
                </li>
                <li className="accordion-item">
                    <input id="s3" className="hide" type="checkbox" />
                    <label for="s3" className="accordion-label">
                        Auto & Transportation
                    </label>
                    <p className="accordion-child">${expenses.auto}</p>
                </li>
                <li className="accordion-item">
                    <input id="s4" className="hide" type="checkbox" />
                    <label for="s4" className="accordion-label">
                        Food & Dining
                    </label>
                    <p className="accordion-child">${expenses.food}</p>
                </li>
                <li className="accordion-item">
                    <input id="s5" className="hide" type="checkbox" />
                    <label for="s5" className="accordion-label">
                        Health & Fitness
                    </label>
                    <p className="accordion-child">${expenses.health}</p>
                </li>
                <li className="accordion-item">
                    <input id="s6" className="hide" type="checkbox" />
                    <label for="s6" className="accordion-label">
                        Entertainment
                    </label>
                    <p className="accordion-child">${expenses.entertainment}</p>
                </li>
                <li className="accordion-item">
                    <input id="s7" className="hide" type="checkbox" />
                    <label for="s7" className="accordion-label">
                        Miscellaneous
                    </label>
                    <p className="accordion-child">${expenses.misc}</p>
                </li>
            </ul>
            <a href="/home">
                <button>Back To Home</button>
            </a>
        </div>
    );
}

export default ExpensesPage;
