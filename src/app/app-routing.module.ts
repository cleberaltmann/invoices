import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from './core/auth/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login-form', pathMatch: 'full' },  
  {
    path: 'index',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthenticationGuard],

  },
  { 
    path: 'dashboard-two', 
    loadChildren: () => 
    import('./dashboard-two/dashboard-two.module').then(m => m.DashboardTwoModule),
    canActivate: [AuthenticationGuard],
  },
  { 
    path: 'dashboard-three', 
    loadChildren: () => import('./dashboard-three/dashboard-three.module').then(m => m.DashboardThreeModule), 
    canActivate: [AuthenticationGuard],
  },
  { 
    path: 'dashboard-four', 
    loadChildren: () => 
    import('./dashboard-four/dashboard-four.module').then(m => m.DashboardFourModule),
    canActivate: [AuthenticationGuard],
  },
  { 
    path: 'dashboard-five', 
    loadChildren: () => 
    import('./dashboard-five/dashboard-five.module').then(m => m.DashboardFiveModule), 
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'forgot-pass',
    loadChildren: () =>
      import(
        './pages/authendication/forgot-password/forgot-password.module'
      ).then((m) => m.ForgotPasswordModule),
  },
  {
    path: 'login-form',
    loadChildren: () =>
      import('./pages/authendication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
 
  {
    path: 'chat',
    loadChildren: () =>
      import('./pages/blog/chat/chat.module').then((m) => m.ChatModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'calender',
    loadChildren: () =>
      import('./pages/blog/calender/calender.module').then(
        (m) => m.CalenderModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'email',
    loadChildren: () =>
      import('./pages/blog/email/email.module').then(
        (m) => m.EmailModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'lock-screen',
    loadChildren: () =>
      import('./pages/authendication/lock-screen/lock-screen.module').then(
        (m) => m.LockScreenModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/authendication/regiser/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'blank-page',
    loadChildren: () =>
      import('./pages/blank-page/blank-page.module').then(
        (m) => m.BlankPageModule
      ),
  },
  {
    path: 'error-first',
    loadChildren: () =>
      import('./pages/error-pages/error-first/error-first.module').then(
        (m) => m.ErrorFirstModule
      ),
  },
  {
    path: 'error-second',
    loadChildren: () =>
      import('./pages/error-pages/error-second/error-second.module').then(
        (m) => m.ErrorSecondModule
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./ui-interface/components/components.module').then(
        (m) => m.ComponentsModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'basic-input',
    loadChildren: () =>
      import('./ui-interface/forms/basic-inputs/basic-inputs.module').then(
        (m) => m.BasicInputsModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'form-validation',
    loadChildren: () =>
      import(
        './ui-interface/forms/form-validation/form-validation.module'
      ).then((m) => m.FormValidationModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'horizondal-form',
    loadChildren: () =>
      import(
        './ui-interface/forms/horizondal-form/horizondal-form.module'
      ).then((m) => m.HorizondalFormModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'input-groups',
    loadChildren: () =>
      import('./ui-interface/forms/input-groups/input-groups.module').then(
        (m) => m.InputGroupsModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'vertical-form',
    loadChildren: () =>
      import(
        './ui-interface/forms/vertical-form/vertical-form.module'
      ).then((m) => m.VerticalFormModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'form-mask',
    loadChildren: () =>
      import('./ui-interface/forms/form-mask/form-mask.module').then(
        (m) => m.FormMaskModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'basic-tables',
    loadChildren: () =>
      import('./ui-interface/tables/basic-tables/basic-tables.module').then(
        (m) => m.BasicTablesModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'admin-data-table',
    loadChildren: () =>
      import(
        './ui-interface/tables/admin-data-table/admin-data-table.module'
      ).then((m) => m.AdminDataTableModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'expenses',
    loadChildren: () =>
      import('./expenses/expenses.module').then(
        (m) => m.ExpensesModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'maps-vector',
    loadChildren: () =>
      import('./mapvector/mapvector.module').then(
        (m) => m.MapvectorModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'expenses-report',
    loadChildren: () =>
      import('./expensesreport/expensesreport.module').then(
        (m) => m.ExpensesreportModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'profit-loss-report',
    loadChildren: () =>
      import('./profitlossreport/profitlossreport.module').then(
        (m) => m.ProfitlossreportModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'sales-report',
    loadChildren: () =>
      import('./salesreport/salesreport.module').then(
        (m) => m.SalesreportModule
      ),
    canActivate: [AuthenticationGuard],

  },
   {
    path: 'taxs-report',
    loadChildren: () =>
      import('./taxsreport/taxsreport.module').then(
        (m) => m.TaxsreportModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'add-expenses',
    loadChildren: () =>
      import('./add-expenses/add-expenses.module').then((m) => m.AddExpensesModule),
    canActivate: [AuthenticationGuard],

  },
  { 
    path: 'edit-expenses', 
    loadChildren: () => 
    import('./edit-expenses/edit-expenses.module').then(m => m.EditExpensesModule),
    canActivate: [AuthenticationGuard], 
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then(
        (m) => m.PaymentsModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'add-payment',
    loadChildren: () =>
      import('./add-payments/add-payments.module').then((m) => m.AddPaymentsModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'add-customer',
    loadChildren: () =>
      import('./add-customer/add-customer.module').then((m) => m.AddCustomerModule),
    canActivate: [AuthenticationGuard],

  },
  { 
    path: 'edit-customer', 
    loadChildren: () => 
      import('./edit-customer/edit-customer.module').then(m => m.EditCustomerModule),
      canActivate: [AuthenticationGuard],
  },
  {
    path: 'estimates',
    loadChildren: () =>
      import('./estimates/estimates.module').then((m) => m.EstimatesModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'add-estimate',
    loadChildren: () =>
      import('./add-estimates/add-estimates.module').then((m) => m.AddEstimatesModule),
    canActivate: [AuthenticationGuard],

  },
  { 
    path: 'edit-estimate', 
    loadChildren: () => 
    import('./edit-estimate/edit-estimate.module').then(m => m.EditEstimateModule),
    canActivate: [AuthenticationGuard], 
  },
  {
    path: 'view-estimate',
    loadChildren: () =>
    import('./view-estimate/view-estimate.module').then((m) => m.ViewEstimateModule),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'invoice-reports',
    loadChildren: () =>
      import('./invoice-reports/invoice-reports.module').then(
        (m) => m.InvoiceReportsModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'view-invoice',
    loadChildren: () =>
      import('./view-invoice/view-invoice.module').then(
        (m) => m.ViewInvoiceModule
      ),
    canActivate: [AuthenticationGuard],

  },
  {
    path: 'add-invoice',
    loadChildren: () =>
      import('./add-invoice/add-invoice.module').then((m) => m.AddInvoiceModule),
    canActivate: [AuthenticationGuard],

  },
  { 
    path: 'edit-invoice', 
    loadChildren: () => 
    import('./edit-invoice/edit-invoice.module').then(m => m.EditInvoiceModule),
    canActivate: [AuthenticationGuard], 
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
    canActivate: [AuthenticationGuard],

  },
  { 
    path: 'invoices-list',
    loadChildren: () => 
    import('./invoices-list/invoices-list.module').then(m => m.InvoicesListModule),
    canActivate: [AuthenticationGuard],
},
  { path: 'invoice-grid', loadChildren: () => import('./invoice-grid/invoice-grid.module').then(m => m.InvoiceGridModule) },
  { path: 'invoices-settings', loadChildren: () => import('./invoices-settings/invoices-settings.module').then(m => m.InvoicesSettingsModule) },
  { path: 'tax-settings', loadChildren: () => import('./tax-settings/tax-settings.module').then(m => m.TaxSettingsModule) },
  { path: 'bank-settings', loadChildren: () => import('./bank-settings/bank-settings.module').then(m => m.BankSettingsModule) },
  { path: 'invoice-items', loadChildren: () => import('./invoice-items/invoice-items.module').then(m => m.InvoiceItemsModule) },
  { path: 'invoice-category', loadChildren: () => import('./invoice-category/invoice-category.module').then(m => m.InvoiceCategoryModule) },
  { path: 'invoices-paid', loadChildren: () => import('./invoices-paid/invoices-paid.module').then(m => m.InvoicesPaidModule) },
  { path: 'invoices-overdue', loadChildren: () => import('./invoices-overdue/invoices-overdue.module').then(m => m.InvoicesOverdueModule) },
  { path: 'invoices-draft', loadChildren: () => import('./invoices-draft/invoices-draft.module').then(m => m.InvoicesDraftModule) },
  { path: 'invoices-recurring', loadChildren: () => import('./invoices-recurring/invoices-recurring.module').then(m => m.InvoicesRecurringModule) },
  { path: 'invoices-cancelled', loadChildren: () => import('./invoices-cancelled/invoices-cancelled.module').then(m => m.InvoicesCancelledModule) },
  {path: '**', redirectTo: '/login-form'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
}),

  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
