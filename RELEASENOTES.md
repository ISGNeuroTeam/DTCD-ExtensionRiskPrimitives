## [0.4.0]

### Added

- New props `condition_<N>` to AlertNode
- New prop `prognoz_state` to PeriodSetupNode

### Changed

- Prop `condition` to `root_condition` in AlertNode

## [0.3.0]

### Added

- New primitives:
  - ExportNode
  - DataNode
  - CalcNode
  - GoalNode
  - ControlledRiskNode
  - UncontrolledRiskNode
  - RiskFactorNode
  - RiskNode
  - RiskMeasNode
  - MeasuresNode
  - KIRNode
  - AlertNode
  - PeriodSetupNode
  - FactorAnalysisNode
  - RiskAppetiteNode
- Default label for nodes
- Field `title` with tooltip text in RiskNode primitive properties
- New RiskAppetiteGoal and RiskAppetiteRisk primitives instead of RiskAppetite
- Added new properties to RiskFactorNode and MeasuresNode

### Changed

- Node titles
- Type property expession in nodes
- Renamed group of new primitives from 'Рисковые примитивы 2' to 'Рисковые примитивы'

### Removed

- Old risk nodes
