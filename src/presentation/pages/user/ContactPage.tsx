import { Box } from "@mui/material";
import { ContactSearch } from "../../components/contact/ContactSearch";
import { ContactCategories } from "../../components/contact/ContactCategories";
import { ContactTopics } from "../../components/contact/ContactTopics";
import { ContactSection } from "../../components/contact/ContactSection";

export default function ContactPage() {
  return (
    <Box>
      <ContactSearch />
      <ContactCategories />
      <ContactTopics />
      <ContactSection />
    </Box>
  );
}
