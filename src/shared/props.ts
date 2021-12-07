import type { ReactNode } from 'react';

import type { TSpacingDefinition } from '../utilities/spacing';

/**
 * This section contains attributes specific to common user interface elements
 * found on GUI systems or in rich internet applications which receive user
 * input and process user actions.
 *
 * These attributes are used to support the widget roles.
 *
 * @see https://www.w3.org/TR/wai-aria-1.0/roles#widget_roles
 */
type PAriaWidgetAttributes = {
    /**
     * Indicates whether user input completion suggestions are provided.
     */
    'aria-autocomplete': boolean;
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and
     * other widgets.
     * @see related aria-pressed and aria-selected.
     */
    'aria-checked': boolean;
    /**
     * @global
     * Indicates that the element is perceivable but disabled, so it is not
     * editable or otherwise operable.
     * @see related aria-hidden and aria-readonly.
     */
    'aria-disabled': boolean;
    /**
     * Indicates whether the element, or another grouping element it controls,
     * is currently expanded or collapsed.
     */
    'aria-expanded': boolean;
    /**
     * @global
     * Indicates that the element has a popup context menu or sub-level menu.
     */
    'aria-haspopup': boolean;
    /**
     * @global
     * Indicates that the element and all of its descendants are not visible or
     * perceivable to any user as implemented by the author.
     * @see related aria-disabled.
     */
    'aria-hidden': boolean;
    /**
     * @global
     * Indicates the entered value does not conform to the format expected by
     * the application.
     */
    'aria-invalid': boolean;
    /**
     * @global
     * Defines a string value that labels the current element.
     * @see related aria-labelledby.
     */
    'aria-label': boolean;
    /**
     * Defines the hierarchical level of an element within a structure.
     */
    'aria-level': boolean;
    /**
     * Indicates whether a text box accepts multiple lines of input or only a
     * single line.
     */
    'aria-multiline': boolean;
    /**
     * Indicates that the user may select more than one item from the current
     * selectable descendants.
     */
    'aria-multiselectable': boolean;
    /**
     * Indicates whether the element and orientation is horizontal or vertical.
     */
    'aria-orientation': boolean;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see related aria-checked and aria-selected.
     */
    'aria-pressed': boolean;
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see related aria-disabled.
     */
    'aria-readonly': boolean;
    /**
     * Indicates that user input is required on the element before a form may be
     * submitted.
     */
    'aria-required': boolean;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see related aria-checked and aria-pressed.
     */
    'aria-selected': boolean;
    /**
     * Indicates if items in a table or grid are sorted in ascending or
     * descending order.
     */
    'aria-sort': boolean;
    /**
     * Defines the maximum allowed value for a range widget.
     */
    'aria-valuemax': boolean;
    /**
     * Defines the minimum allowed value for a range widget.
     */
    'aria-valuemin': boolean;
    /**
     * Defines the current value for a range widget.
     * @see related aria-valuetext.
     */
    'aria-valuenow': boolean;
    /**
     * Defines the human readable text alternative of aria-valuenow for a range
     * widget.
     */
    'aria-valuetext': boolean;
};

/**
 * This section contains attributes specific to live regions in rich internet
 * applications. These attributes may be applied to any element.
 *
 * The purpose of these attributes is to indicate that content changes may occur
 * without the element having focus, and to provide assistive technologies with
 * information on how to process those content updates. Some roles specify a
 * default value for the aria-live attribute specific to that role.
 *
 * An example of a live region is a ticker section that lists updating stock
 * quotes.
 */
type PAriaLiveRegionAttributes = {
    /**
     * @global
     * Indicates whether assistive technologies will present all, or only parts
     * of, the changed region based on the change notifications defined by the
     * aria-relevant attribute.
     * @see related aria-relevant.
     */
    'aria-atomic': boolean;
    /**
     * @global
     * Indicates whether an element, and its subtree, are currently being updated.
     */
    'aria-busy': boolean;
    /**
     * @global
     * Indicates that an element will be updated, and describes the types of
     * updates the user agents, assistive technologies, and user can expect from
     * the live region.
     */
    'aria-live': boolean;
    /**
     * @global
     * Indicates what user agent change notifications (additions, removals, etc.)
     * assistive technologies will receive within a live region.
     * @see related aria-atomic.
     */
    'aria-relevant': boolean;
};

/**
 * This section lists attributes which indicate information about drag-and-drop
 * interface elements, such as draggable elements and their drop targets.
 *
 * Drop target information will be rendered visually by the author and provided
 * to assistive technologies through an alternate modality.
 */
type PAriaDragAndDropAttributes = {
    /**
     * @global
     * Indicates what functions can be performed when the dragged object is
     * released on the drop target. This allows assistive technologies to convey
     * the possible drag options available to users, including whether a pop-up
     * menu of choices is provided by the application. Typically, drop effect
     * functions can only be provided once an object has been grabbed for a drag
     * operation as the drop effect functions available are dependent on the
     * object being dragged.
     */
    'aria-dropeffect': boolean;
    /**
     * @global
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     */
    'aria-grabbed': boolean;
};

type PAriaRelationshipAttributes = {
    /**
     * Identifies the currently active descendant of a composite widget.
     */
    'aria-activedescendant': boolean;
    /**
     * @global
     * Identifies the element (or elements) whose contents or presence are
     * controlled by the current element.
     * @see related aria-owns.
     */
    'aria-controls': boolean;
    /**
     * @global
     * Identifies the element (or elements) that describes the object.
     * @see related aria-labelledby.
     */
    'aria-describedby': boolean;
    /**
     * @global
     * Identifies the next element (or elements) in an alternate reading order
     * of content which, at the user's discretion, allows assistive technology
     * to override the general default of reading in document source order.
     */
    'aria-flowto': boolean;
    /**
     * @global
     * Identifies the element (or elements) that labels the current element.
     * @see related aria-label and aria-describedby.
     */
    'aria-labelledby': boolean;
    /**
     * @global
     * Identifies an element (or elements) in order to define a visual,
     * functional, or contextual parent/child relationship between DOM elements
     * where the DOM hierarchy cannot be used to represent the relationship.
     * @see related aria-controls.
     */
    'aria-owns': boolean;
    /**
     * Defines an element's number or position in the current set of listitems or
     * treeitems. Not required if all elements in the set are present in the DOM.
     * @see related aria-setsize.
     */
    'aria-posinset': boolean;
    /**
     * Defines the number of items in the current set of listitems or treeitems.
     * Not required if all elements in the set are present in the DOM.
     * @see related aria-posinset.
     */
    'aria-setsize': boolean;
};

type PAriaAllAttributes = PAriaWidgetAttributes &
    PAriaLiveRegionAttributes &
    PAriaDragAndDropAttributes &
    PAriaRelationshipAttributes;

/**
 * implements padding and margin spacing properties to a components properties
 * definition, where they are needed.
 *
 * Is part of the type PGlobals, but can be used separately.
 */
type PGlobalsLayout = {
    /**
     * padding according to `TSpacingDefinition` type
     */
    padding?: TSpacingDefinition;
    /**
     * margin according to `TSpacingDefinition` type
     */
    margin?: TSpacingDefinition;
};

/**
 * implements className and children properties to a components properties
 * definition, where they are needed.
 *
 * Is part of the type PGlobals, but can be used separately.
 */
type PGlobalsMisc = {
    /**
     * custom className
     */
    className?: string;
    /**
     * component children
     */
    children?: ReactNode | ReactNode[];
};

type PGlobals = PGlobalsMisc & PGlobalsLayout;

export type {
    PGlobals,
    PGlobalsMisc,
    PGlobalsLayout,
    PAriaWidgetAttributes,
    PAriaLiveRegionAttributes,
    PAriaDragAndDropAttributes,
    PAriaRelationshipAttributes,
};

export default PAriaAllAttributes;
