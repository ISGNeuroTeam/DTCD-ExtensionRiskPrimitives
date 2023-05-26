// import CRLNodes from './RichLabelNodes/CRLNodes';
// import URLNodes from './RichLabelNodes/URLNodes';
// import SRLNodes from './RichLabelNodes/SRLNodes';
// import TRLNodes from './RichLabelNodes/TRLNodes';
import ExportNode from './ExportNode/ExportNode';
import DataNode from './DataNode/DataNode';
import CalcNode_2 from './CalcNode/CalcNode_2';
import CalcNode_3 from './CalcNode/CalcNode_3';
import GoalNode from './GoalNode/GoalNode';
import ControlledRiskNode from './ControlledRiskNode/ControlledRiskNode';
import UncontrolledRisk from './UncontrolledRiskNode/UncontrolledRiskNode';
import RiskFactor from './RiskFactorNode/RiskFactorNode';
import RiskNode from './RiskNode/RiskNode';
import RiskMeasNode from './RiskMeasNode/RiskMeasNode';
import MeasuresNode from './MeasuresNode/MeasuresNode';
import KIRNode_2 from './KIRNode/KIRNode_2';
import KIRNode_3 from './KIRNode/KIRNode_3';
import PeriodSetupNode from './PeriodSetupNode/PeriodSetupNode';
import AlertNode from './AlertNode/AlertNode';
import RiskAppetiteGoalNode from './RiskAppetiteGoalNode/RiskAppetiteGoalNode';
import FactorAnalysisNode from './FactorAnalysisNode/FactorAnalysisNode';
import RiskApptiteRiskNode from './RiskAppetiteRiskNode/RiskAppetiteRiskNode';

export default [
  // ...CRLNodes,
  // ...URLNodes,
  // ...SRLNodes,
  // ...TRLNodes,
  DataNode,
  CalcNode_2,
  CalcNode_3,
  GoalNode,
  ControlledRiskNode,
  UncontrolledRisk,
  RiskFactor,
  RiskNode,
  RiskMeasNode,
  MeasuresNode,
  KIRNode_2,
  KIRNode_3,
  ExportNode,
  PeriodSetupNode,
  AlertNode,
  RiskAppetiteGoalNode,
  FactorAnalysisNode,
  RiskApptiteRiskNode,
];
