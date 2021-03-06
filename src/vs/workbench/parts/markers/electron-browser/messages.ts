/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as nls from 'vs/nls';
import { MarkerSeverity, IRelatedInformation } from 'vs/platform/markers/common/markers';
import { Marker } from './markersModel';

export default class Messages {

	public static MARKERS_PANEL_VIEW_CATEGORY: string = nls.localize('viewCategory', "View");
	public static MARKERS_PANEL_TOGGLE_LABEL: string = nls.localize('problems.view.toggle.label', "Toggle Problems (Errors, Warnings, Infos)");
	public static MARKERS_PANEL_SHOW_LABEL: string = nls.localize('problems.view.focus.label', "Focus Problems (Errors, Warnings, Infos)");

	public static PROBLEMS_PANEL_CONFIGURATION_TITLE: string = nls.localize('problems.panel.configuration.title', "Problems View");
	public static PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL: string = nls.localize('problems.panel.configuration.autoreveal', "Controls if Problems view should automatically reveal files when opening them");

	public static MARKERS_PANEL_TITLE_PROBLEMS: string = nls.localize('markers.panel.title.problems', "Problems");
	public static MARKERS_PANEL_ARIA_LABEL_PROBLEMS_TREE: string = nls.localize('markers.panel.aria.label.problems.tree', "Problems grouped by files");

	public static MARKERS_PANEL_NO_PROBLEMS_BUILT: string = nls.localize('markers.panel.no.problems.build', "No problems have been detected in the workspace so far.");
	public static MARKERS_PANEL_NO_PROBLEMS_FILTERS: string = nls.localize('markers.panel.no.problems.filters', "No results found with provided filter criteria");

	public static MARKERS_PANEL_ACTION_TOOLTIP_FILTER: string = nls.localize('markers.panel.action.filter', "Filter Problems");
	public static MARKERS_PANEL_FILTER_PLACEHOLDER: string = nls.localize('markers.panel.filter.placeholder', "Filter by type or text");
	public static MARKERS_PANEL_FILTER_ERRORS: string = nls.localize('markers.panel.filter.errors', "errors");
	public static MARKERS_PANEL_FILTER_WARNINGS: string = nls.localize('markers.panel.filter.warnings', "warnings");
	public static MARKERS_PANEL_FILTER_INFOS: string = nls.localize('markers.panel.filter.infos', "infos");

	public static MARKERS_PANEL_SINGLE_ERROR_LABEL: string = nls.localize('markers.panel.single.error.label', "1 Error");
	public static readonly MARKERS_PANEL_MULTIPLE_ERRORS_LABEL = (noOfErrors: number): string => { return nls.localize('markers.panel.multiple.errors.label', "{0} Errors", '' + noOfErrors); };
	public static MARKERS_PANEL_SINGLE_WARNING_LABEL: string = nls.localize('markers.panel.single.warning.label', "1 Warning");
	public static readonly MARKERS_PANEL_MULTIPLE_WARNINGS_LABEL = (noOfWarnings: number): string => { return nls.localize('markers.panel.multiple.warnings.label', "{0} Warnings", '' + noOfWarnings); };
	public static MARKERS_PANEL_SINGLE_INFO_LABEL: string = nls.localize('markers.panel.single.info.label', "1 Info");
	public static readonly MARKERS_PANEL_MULTIPLE_INFOS_LABEL = (noOfInfos: number): string => { return nls.localize('markers.panel.multiple.infos.label', "{0} Infos", '' + noOfInfos); };
	public static MARKERS_PANEL_SINGLE_UNKNOWN_LABEL: string = nls.localize('markers.panel.single.unknown.label', "1 Unknown");
	public static readonly MARKERS_PANEL_MULTIPLE_UNKNOWNS_LABEL = (noOfUnknowns: number): string => { return nls.localize('markers.panel.multiple.unknowns.label', "{0} Unknowns", '' + noOfUnknowns); };

	public static readonly MARKERS_PANEL_AT_LINE_COL_NUMBER = (ln: number, col: number): string => { return nls.localize('markers.panel.at.ln.col.number', "({0}, {1})", '' + ln, '' + col); };

	public static readonly MARKERS_TREE_ARIA_LABEL_RESOURCE = (fileName: string, noOfProblems: number): string => { return nls.localize('problems.tree.aria.label.resource', "{0} with {1} problems", fileName, noOfProblems); };
	public static readonly MARKERS_TREE_ARIA_LABEL_MARKER = (marker: Marker): string => {
		const relatedInformationMessage = marker.resourceRelatedInformation.length ? nls.localize('problems.tree.aria.label.marker.relatedInformation', " This problem has references to {0} locations.", marker.resourceRelatedInformation.reduce((count, r) => count + r.count, 0)) : '';
		switch (marker.raw.severity) {
			case MarkerSeverity.Error:
				return marker.raw.source ? nls.localize('problems.tree.aria.label.error.marker', "Error generated by {0}: {1} at line {2} and character {3}.{4}", marker.raw.source, marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage)
					: nls.localize('problems.tree.aria.label.error.marker.nosource', "Error: {0} at line {1} and character {2}.{3}", marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage);
			case MarkerSeverity.Warning:
				return marker.raw.source ? nls.localize('problems.tree.aria.label.warning.marker', "Warning generated by {0}: {1} at line {2} and character {3}.{4}", marker.raw.source, marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage)
					: nls.localize('problems.tree.aria.label.warning.marker.nosource', "Warning: {0} at line {1} and character {2}.{3}", marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage, relatedInformationMessage);

			case MarkerSeverity.Info:
				return marker.raw.source ? nls.localize('problems.tree.aria.label.info.marker', "Info generated by {0}: {1} at line {2} and character {3}.{4}", marker.raw.source, marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage)
					: nls.localize('problems.tree.aria.label.info.marker.nosource', "Info: {0} at line {1} and character {2}.{3}", marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage);
			default:
				return marker.raw.source ? nls.localize('problems.tree.aria.label.marker', "Problem generated by {0}: {1} at line {2} and character {3}.{4}", marker.raw.source, marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage)
					: nls.localize('problems.tree.aria.label.marker.nosource', "Problem: {0} at line {1} and character {2}.{3}", marker.raw.message, marker.raw.startLineNumber, marker.raw.startColumn, relatedInformationMessage);
		}
	}
	public static readonly MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION = (relatedInformation: IRelatedInformation): string => nls.localize('problems.tree.aria.label.relatedinfo.message', "{0} at line {1} and character {2}", relatedInformation.message, relatedInformation.startLineNumber, relatedInformation.startColumn);
	public static SHOW_ERRORS_WARNINGS_ACTION_LABEL: string = nls.localize('errors.warnings.show.label', "Show Errors and Warnings");
}
