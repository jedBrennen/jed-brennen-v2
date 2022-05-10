export interface Company {
  id: string;
  name: string;
  logo: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  joined: string;
  departed?: string;
  title: string;
  location: string;
  description: string;
  additionalPoints?: string[];
}
