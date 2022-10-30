import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css';
import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const primeCss = css`
  .p-component {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .p-button:focus {
    box-shadow: none;
  }
  .p-button {
    color: #ffffff;
    background: ${(props) => props.theme.colors.green};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 5px;
  }

  .p-button:enabled:hover,
  .p-button:not(button):not(a):not(.p-disabled):hover {
    background: ${(props) => props.theme.colors.darkGreen};
    color: #ffffff;
  }
  
  .filter-overlay {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors.darkBlue};
    width: 14.3rem;
    
    .p-overlaypanel-content {
    padding: 0rem !important;
    margin: auto;
    width: 13.3rem;
    }
  }
  .p-treetable {
    .p-treetable-header {
      background: ${(props) => props.theme.colors.lightBlueHover};
      border: 1px solid #cad4dc;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
    }
    
    .col-header {
    align-items: center;
    }

    .p-treetable-wrapper {
      border: 1px solid #cad4dc;
      border-radius: 0 0 8px 8px;
    }

    .p-treetable-toggler {
      :focus {
        box-shadow: 0 0 0 0.1rem #b7e0b8 !important;
      }
      padding: 0.75rem;
    }

    .p-treetable-footer {
      background: transparent;
      font-weight: normal;
      border: none;
      padding: 0.75rem;
      color: #7185a8;
    }

    .p-treetable-thead > tr > th {
      background: ${(props) => props.theme.colors.lightBlueHover};
    }

    .p-treetable-thead > tr > th,
    .p-treetable-tbody > tr > td {
      font-size: 1rem;
      white-space: nowrap !important;
      color: ${(props) => props.theme.colors.darkBlue};
    }

    .p-treetable-thead {
      color: ${(props) => props.theme.colors.darkBlue};
      height: 3rem;
    }

    .pi {
      color: ${(props) => props.theme.colors.darkBlue};
    }
    
    .p-component-overlay {
      background-color: rgba(0, 0, 0, 0.02);
      backdrop-filter: blur(0.5px);
      transition-duration: 0s;
    }
  }

  .p-datatable {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1rem;

    .p-datatable-header {
      background: ${(props) => props.theme.colors.lightBlueHover};
      border: 1px solid #cad4dc;
      border-width: 1px 1px 0 1px;
      border-radius: 8px 8px 0 0;
      display: flex;
      padding: 1rem 1rem;
    }

    .p-datatable-thead > tr > th {
      background: ${(props) => props.theme.colors.lightBlueHover};
      color: ${(props) => props.theme.colors.darkBlue};
      font-size: 1rem;
      border: none;
      line-height: 2.75rem;
    }

    .p-datatable-tbody > tr > td {
      font-size: 1rem;
      border: none;
    }

    .p-datatable-tbody > tr {
      color: ${(props) => props.theme.colors.darkBlue};
      line-height: 2rem;
    }

    .p-datatable-tbody > tr > td a.link,
    a.link:visited {
      color: ${(props) => props.theme.colors.darkBlue};
      font-size: 1rem;
      text-decoration: none;
      font-weight: bold;
    }

    .p-datatable-wrapper {
      border-spacing: 0;
      border: 1px solid #cad4dc;
      border-radius: 0 0 8px 8px;
    }

    .p-component-overlay {
      background-color: rgba(0, 0, 0, 0.02);
      backdrop-filter: blur(0.5px);
      transition-duration: 0s;
    }
  }

  .p-inputtext {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    border-radius: 5px;
    border-color: #cad4dc;
  }
  .p-inputtext:enabled:hover {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    border-radius: 5px;
    border-color: #cad4dc;
    box-shadow: none;
  }
  .p-inputtext:enabled:focus {
    box-shadow: none;
    border-color: #cad4dc;
  }

  .p-link:focus {
    box-shadow: none;
  }

  .p-dropdown {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    border-radius: 5px;
    border-color: #cad4dc;
    box-shadow: none;
  }
  .p-dropdown:not(.p-disabled):hover {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    border-radius: 5px;
    border-color: #cad4dc;
    box-shadow: none;
  }
  .p-dropdown:not(.p-disabled).p-focus {
    box-shadow: none;
    border-color: #cad4dc;
  }
  .p-dropdown:not(.p-disabled):focus {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    border-radius: 5px;
    border-color: #cad4dc;
    box-shadow: none;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-dropdown .p-dropdown-trigger {
    color: #7185a8;
    font-size: 1.063rem;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
  }

  .p-column-filter-menu-button {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-column-filter-overlay {
    margin-top: 0.2rem;
    color: ${(props) => props.theme.colors.darkBlue};

    .p-column-filter-add-rule button {
      color: ${(props) => props.theme.colors.darkBlue} !important;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      display: block;

      :enabled:hover {
        background: ${(props) => props.theme.colors.lightBlueHover};
      }
    }

    .p-column-filter-constraint .p-column-filter-remove-button {
      color: ${(props) => props.theme.colors.darkBlue};
      background-color: #fff;
      border: none;
    }

    .p-button.p-button-danger.p-button-text:enabled:hover {
      color: ${(props) => props.theme.colors.darkBlue};
      background: ${(props) => props.theme.colors.lightBlueHover};
      border: none;
    }
    .p-button.p-button-danger.p-button-text:enabled:active,
    .p-button.p-button-danger:enabled:focus,
    .p-button.p-button-danger:not(button):not(a):not(.p-disabled):focus,
    .p-buttonset.p-button-danger > .p-button:enabled:focus,
    .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):focus,
    .p-splitbutton.p-button-danger > .p-button:enabled:focus,
    .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):focus,
    .p-fileupload-choose.p-button-danger:enabled:focus,
    .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):focus {
      color: ${(props) => props.theme.colors.darkBlue};
      background: ${(props) => props.theme.colors.lightBlueHover};
      border: none;
      box-shadow: none;
    }

    .p-column-filter-buttonbar .p-button {
      color: #ffff;
      background-color: ${(props) => props.theme.colors.green} !important;
      border: 1px solid ${(props) => props.theme.colors.green};
    }
    .p-column-filter-buttonbar .p-button:enabled:hover,
    .p-button:not(button):not(a):not(.p-disabled):hover {
      color: #ffff !important;
      background-color: ${(props) => props.theme.colors.darkGreen} !important;
      border: 1px solid ${(props) => props.theme.colors.darkGreen} !important;
    }

    .p-column-filter-buttonbar .p-button-outlined {
      color: ${(props) => props.theme.colors.darkBlue};
      border: 1px solid ${(props) => props.theme.colors.darkBlue} !important;
      background-color: #ffff !important;
      font-weight: bold;

      :enabled:hover {
        color: ${(props) => props.theme.colors.darkBlue} !important;
        border: 1px solid ${(props) => props.theme.colors.darkBlue} !important;
        background-color: ${(props) => props.theme.colors.lightBlueHover} !important;
      }
    }
  }

  .p-column-filter-overlay-menu .p-column-filter-buttonbar .p-button {
    background-color: #fff;
  }
  .p-column-filter-overlay-menu .p-column-filter-buttonbar .p-button:enabled:hover,
  .p-button:not(button):not(a):not(.p-disabled):hover {
    color: ${(props) => props.theme.colors.darkBlue};
    background-color: #cad4dc;
    border: 2px solid ${(props) => props.theme.colors.darkBlue};
  }

  .p-column-filter-menu-button:hover {
    background: none;
    border: 1px solid #cad4dc;
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-column-filter-menu-button:focus {
    box-shadow: none;
  }
  .p-column-filter-overlay-menu .p-column-filter-buttonbar .p-button.p-button-outlined:enabled:hover,
  .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${(props) => props.theme.colors.darkBlue};
    background-color: #cad4dc;
    border-color: #cad4dc;
  }

  .p-datatable .p-sortable-column .p-sortable-column-icon {
    color: ${(props) => props.theme.colors.darkBlue};
    margin-left: 0.5rem;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: ${(props) => props.theme.colors.lightBlue};
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: #e8f5e9;
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
    background: ${(props) => props.theme.colors.lightBlueHover};
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
    background: ${(props) => props.theme.colors.lightBlueHover};
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column.p-highlight {
    background: ${(props) => props.theme.colors.lightBlueHover};
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
    background: ${(props) => props.theme.colors.lightBlueHover};
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-open,
  .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: #7185a8;
    color: #fff;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-active,
  .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: none;
    border: 1px solid #7185a8;
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-datatable .p-sortable-column:focus {
    box-shadow: inset 0 0 0 0.15rem ${(props) => props.theme.colors.lightBlueHover};
  }
  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: #cad4dc;
  }
  .p-datatable .p-sortable-column-icon {
    cursor: pointer;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-active {
    background: #7185a8;
    color: #fff;
  }
  .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.75rem;
    line-height: 1.25rem;
  }
  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    color: ${(props) => props.theme.colors.darkBlue};
  }

  .p-paginator {
    font-size: 1.063rem;
    padding: 2rem 0;
    justify-content: left;
  }
  .p-paginator .p-dropdown {
    border-radius: 5px;
  }
  .p-datatable .p-paginator-bottom {
    border-width: 0;
    color: #7185a8;
    font-size: 1.063rem;
  }
  .p-paginator .p-paginator-current {
    color: #7185a8;
  }
  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    color: #7185a8;
    font-size: 1.063rem;
  }
  .p-paginator .p-paginator-first .p-paginator-icon.pi,
  .p-paginator .p-paginator-prev .p-paginator-icon.pi,
  .p-paginator .p-paginator-next .p-paginator-icon.pi,
  .p-paginator .p-paginator-last .p-paginator-icon.pi {
    font-size: 1.063rem;
  }
  .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: #cad4dc;
    border-radius: 1.25rem;
  }
  .p-paginator-next.p-paginator-element.p-link:focus,
  .p-paginator-prev.p-paginator-element.p-link:focus,
  .p-paginator-first.p-paginator-element.p-link:focus,
  .p-paginator-last.p-paginator-element.p-link:focus {
    border-radius: 1.25rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page {
    color: #7185a8;
    font-size: 1.063rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    color: ${(props) => props.theme.colors.darkBlue};
    background: #cad4dc;
    border-radius: 1.25rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    color: ${(props) => props.theme.colors.darkBlue};
    background: #cad4dc;
    border-radius: 1.25rem;
  }
  .p-paginator .p-dropdown {
    border: 1px solid #cad4dc;
  }
  .p-paginator .p-dropdown .p-dropdown-label.p-inputtext {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
  }
  .p-paginator .p-dropdown .p-dropdown-trigger {
    color: #7185a8;
    font-size: 1.063rem;
  }
  .p-paginator .p-dropdown:not(.p-disabled):hover {
    border-color: #cad4dc;
  }
  .p-paginator .p-dropdown:not(.p-disabled):focus {
    border-color: #cad4dc;
  }

  .p-multiselect {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    border-radius: 5px;
  }
  .p-multiselect .p-multiselect-trigger {
    color: #7185a8;
    font-size: 1.063rem;
  }
  .p-multiselect:not(.p-disabled):hover {
    border-color: #cad4dc;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    background-color: #fff;
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-multiselect-panel .p-multiselect-header {
    background-color: #cad4dc;
  }

  .p-tabmenu .p-tabmenu-nav {
    border-color: #dee2e6;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    border-width: 0 0 3px 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    border-color: #dee2e6;
    border-width: 0 0 3px 0;
    color: ${(props) => props.theme.colors.darkBlue};
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {
    box-shadow: none;
  }

  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    color: ${(props) => props.theme.colors.darkBlue};
  }

  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    color: ${(props) => props.theme.colors.darkBlue};
  }

  .p-dialog .p-dialog-content {
    color: inherit;
  }

  .p-card {
    color: inherit;
  }

  .p-inputtext {
    color: inherit;
  }

  .p-dropdown-item {
    color: inherit;
  }

  .p-overlaypanel-content {
    color: ${(props) => props.theme.colors.darkBlue};
    width: 13rem;
  }

  .p-overlaypanel .p-overlaypanel-close {
    background: #cad4dc;
    color: ${(props) => props.theme.colors.darkBlue};
    width: 1.6rem;
    height: 1.6rem;
    .pi {
      font-size: 0.8rem;
    }
  }
  .p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: #cad4dc;
    color: ${(props) => props.theme.colors.darkBlue};
  }

  .p-checkbox .p-checkbox-box {
    border: 1px solid #7185a8;
    background: #f5fafa;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    box-shadow: none !important;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }

  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    border-color: ${(props) => props.theme.colors.green};
    background: ${(props) => props.theme.colors.green};
  }
  .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
    border-color: ${(props) => props.theme.colors.green};
    background: ${(props) => props.theme.colors.green};
  }
`;

const utilityCss = css`
  .flex {
    display: flex;

    &-center {
      align-items: center;
      justify-content: center;
    }

    &-center-y {
      align-items: center;
    }

    &-center-x {
      justify-content: center;
    }

    &-grow {
      flex-grow: 1;
    }

    &-column {
      flex-flow: column;
    }

    &-between {
      justify-content: space-between;
    }

    &-right {
      justify-content: flex-end;
    }
  }

  .text {
    &-center {
      text-align: center;
    }
  }

  .strike {
    text-decoration: line-through;
  }

  .table-actions {
    width: 23px;
    .pi {
      font-size: 10px;
    }
    .p-button {
      width: 22px;
    }
  }
`;

const globalCss = css`
  color: #263f6a;

  @font-face {
    font-family: 'Energia';
    font-style: normal;
    font-weight: normal;
    src: local('Energia'), url(/fonts/EnergiaRegular.otf) format('opentype');
  }

  @font-face {
    font-family: 'Uni Neue';
    font-style: normal;
    font-weight: normal;
    src: local('Uni Neue'), url(/fonts/UniNeue-Regular.otf) format('opentype');
  }

  body {
    flex-flow: column wrap;
    font-family: 'Uni Neue', Calibri, sans-serif;
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.063rem;
    font-weight: normal;
  }

  #hcm-client {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4em 1fr;
    gap: 0 0;
    grid-template-areas:
      '.'
      '.';
    height: 100vh;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${primeCss}
  ${utilityCss}
  ${globalCss}

  .box-shadow {
    box-shadow: 2px 2px 8px 2px rgba(100, 100, 100, 0.25);
  }

  .page {
    margin-top: 1rem;
  }
`;

export default GlobalStyles;
