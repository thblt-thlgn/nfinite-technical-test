import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Outlet, Route, Routes, Navigate } from 'react-router-dom'
import './assets/global.scss'
import ProductsImportPage from './components/ProductsImportPage'
import ProductsSummaryPage from './components/ProductsSummaryPage'
import PageTemplate from './components/PageTemplate'
import reportWebVitals from './reportWebVitals'
import NotFoundPage from './components/NotFoundPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={
            <PageTemplate>
              <Outlet />
            </PageTemplate>
          }
        >
          <Route index element={<Navigate to="import" />} />
          <Route path="import" element={<ProductsImportPage />} />
          <Route path="summary" element={<ProductsSummaryPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

console.log('Have a good review 🚀')
