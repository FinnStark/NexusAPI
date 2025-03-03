import yaml from "yamljs";
import path from "path";

const swaggerDocument = yaml.load(path.resolve(__dirname, "swagger.yaml"));

export default swaggerDocument;
