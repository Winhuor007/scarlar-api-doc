import '@scalar/api-reference-react/style.css';
import "../styles/scalar-custom.css";
import { ApiReferenceReact } from '@scalar/api-reference-react';

export default function ScalarDoc() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className=" w-full h-full overflow-y-auto overflow-x-hidden relative">
        <ApiReferenceReact
          configuration={{
            url: '/openapi.yaml',
            layout: 'modern',
            hideModels: true,
            hideClientButton: true,
            // showDeveloperTools: "never",
            theme: "bluePlanet",
          }} />
      </div>
    </div>
  );
}

