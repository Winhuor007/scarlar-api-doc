import '@scalar/api-reference-react/style.css';
import "../styles/scalar-custom.css";
import { ApiReferenceReact } from '@scalar/api-reference-react';

export default function ScalarDoc() {
  return (
    <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <ApiReferenceReact
        configuration={{
          spec: {
            url: `${import.meta.env.BASE_URL}openapi.yaml`,
          },
          layout: 'modern',
          hideModels: true,
          hideSidebarToggle: true,
          showDeveloperTools: "never"
        }}
      />
    </div>
  );
}
