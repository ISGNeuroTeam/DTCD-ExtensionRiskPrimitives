# **CHANGELOG**

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.1]

### Changed

- the `indentifier` prop in MeasuresNode and RiskFactorNode renamed to `identifier`

## [0.4.0]

### Added

- new props `condition_<N>` to AlertNode
- new prop `prognoz_state` to PeriodSetupNode

### Changed

- prop `condition` to `root_condition` in AlertNode

## [0.3.0]

### Added

- new ExportNode primitive
- new DataNode primitive
- new CalcNode primitive
- new GoalNode primitive
- new ControlledRiskNode primitive
- new UncontrolledRiskNode primitive
- new RiskFactorNode primitive
- new RiskNode primitive
- new RiskMeasNode primitive
- new MeasuresNode primitive
- new KIRNode primitive
- new AlertNode primitive
- new PeriodSetupNode primitive
- new FactorAnalysisNode primitive
- new RiskAppetiteNode primitive
- default label for nodes
- AbstractNode class
- NodeWithDefaultLabel class
- field 'title' with tooltip text in RiskNode primitive properties
- new RiskAppetiteGoal and RiskAppetiteRisk primitives instead of RiskAppetite
- added new properties to RiskFactorNode and MeasuresNode

### Changed

- version of sdk
- node titles
- type property expession in nodes
- renamed group of new primitives from 'Рисковые примитивы 2' to 'Рисковые примитивы'

### Removed

- old risk nodes

## [0.2.0]

### Removed

- yFiles library dependency

## [0.1.0]

### Added

- inited
