import '@scalar/api-reference-react/style.css';
import "../styles/scalar-custom.css";
import { ApiReferenceReact } from '@scalar/api-reference-react';

export default function ScalarDoc() {
  return (
    <div >
      <ApiReferenceReact configuration={{ url: `${import.meta.env.BASE_URL}openapi.yaml`, layout: 'modern', hideModels: true, hideClientButton: true,showDeveloperTools: "never", }} />
    </div>
  );
}
