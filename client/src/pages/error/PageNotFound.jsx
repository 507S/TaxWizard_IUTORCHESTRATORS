import PageNotFoundLayout from "../../components/error/PageNotFoundLayout";
import TabTitle from "../../utils/TabTitle";


export default function PageNotFound() {
  TabTitle("TaxWizard - 404:Page Not Found");
  return (
   <PageNotFoundLayout />
  )
}
