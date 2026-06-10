# Unidad de Análisis Content Specification

## Purpose

This specification defines the core content structure and slide requirements for the new academic presentation covering the methodological research concept of "Unidad de Análisis" (Unit of Analysis).

## Requirements

### Requirement: Presentation Structure and Title Slide

The presentation MUST begin with a title slide that clearly introduces the topic of "Unidad de Análisis".

#### Scenario: User starts the presentation
- GIVEN the user navigates to the "Unidad de Análisis" presentation
- WHEN the presentation loads
- THEN the first slide displayed is the Title Slide
- AND it contains the presentation title and introductory context

### Requirement: Concept Definition Slide

The presentation MUST include a slide that defines what a "Unidad de Análisis" is in the context of methodological research.

#### Scenario: User advances to the definition
- GIVEN the user is viewing the Title Slide
- WHEN the user advances to the next slide
- THEN a slide containing the formal concept definition is displayed

### Requirement: Types of Units Slide

The presentation MUST enumerate and explain the different types of analytical units, specifically covering Individuals, Groups, Artifacts, Geographical units, and Social interactions.

#### Scenario: User reviews the types of units
- GIVEN the user has reached the Types of Units section
- WHEN the slide is presented
- THEN it lists Individuals, Groups, Artifacts, Geographical units, and Social interactions
- AND provides a brief explanation for each type

### Requirement: Practical Examples Slide

The presentation MUST provide a slide with practical, real-world examples illustrating the different types of units of analysis.

#### Scenario: User views examples
- GIVEN the user is viewing the presentation
- WHEN the Examples slide is shown
- THEN practical examples mapping to the previously defined types are displayed

### Requirement: Interactive Matching Activity Slide

The presentation MUST include an interactive activity slide where students can match specific examples to their correct corresponding type of unit of analysis.

#### Scenario: Student completes the activity successfully
- GIVEN the user is on the Interactive Activity slide
- WHEN the user matches an example to its correct unit type
- THEN the system visually confirms the correct match

#### Scenario: Student makes an incorrect match
- GIVEN the user is on the Interactive Activity slide
- WHEN the user matches an example to an incorrect unit type
- THEN the system visually indicates the error and allows them to try again
