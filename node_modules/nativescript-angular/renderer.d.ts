import { Renderer, RootRenderer, RenderComponentType, RenderDebugInfo } from '@angular/core/src/render/api';
import { AnimationKeyframe } from '@angular/core/src/animation/animation_keyframe';
import { AnimationPlayer } from '@angular/core/src/animation/animation_player';
import { AnimationStyles } from '@angular/core/src/animation/animation_styles';
import { View } from "ui/core/view";
import { Page } from 'ui/page';
import { ViewUtil, NgView } from "./view-util";
import { Device } from "platform";
export declare class NativeScriptRootRenderer implements RootRenderer {
    private _rootView;
    private _viewUtil;
    constructor(rootView: View, device: Device);
    private _registeredComponents;
    rootView: View;
    page: Page;
    viewUtil: ViewUtil;
    renderComponent(componentProto: RenderComponentType): Renderer;
}
export declare class NativeScriptRenderer extends Renderer {
    private _rootRenderer;
    private componentProto;
    private componentProtoId;
    private hasComponentStyles;
    private rootRenderer;
    private viewUtil;
    constructor(_rootRenderer: NativeScriptRootRenderer, componentProto: RenderComponentType);
    private attrReplacer;
    private attrSanitizer;
    private replaceNgAttribute(input, componentId);
    renderComponent(componentProto: RenderComponentType): Renderer;
    selectRootElement(selector: string): NgView;
    createViewRoot(hostElement: NgView): NgView;
    projectNodes(parentElement: NgView, nodes: NgView[]): void;
    attachViewAfter(anchorNode: NgView, viewRootNodes: NgView[]): void;
    detachView(viewRootNodes: NgView[]): void;
    animateNodeEnter(node: NgView): void;
    animateNodeLeave(node: NgView): void;
    destroyView(hostElement: NgView, viewAllNodes: NgView[]): void;
    setElementProperty(renderElement: NgView, propertyName: string, propertyValue: any): void;
    setElementAttribute(renderElement: NgView, attributeName: string, attributeValue: string): void;
    setElementClass(renderElement: NgView, className: string, isAdd: boolean): void;
    setElementStyle(renderElement: NgView, styleName: string, styleValue: string): void;
    /**
    * Used only in debug mode to serialize property changes to comment nodes,
    * such as <template> placeholders.
    */
    setBindingDebugInfo(renderElement: NgView, propertyName: string, propertyValue: string): void;
    setElementDebugInfo(renderElement: any, info: RenderDebugInfo): void;
    /**
    * Calls a method on an element.
    */
    invokeElementMethod(renderElement: NgView, methodName: string, args: Array<any>): void;
    setText(renderNode: any, text: string): void;
    createTemplateAnchor(parentElement: NgView): NgView;
    createElement(parentElement: NgView, name: string): NgView;
    createText(parentElement: NgView, value: string): NgView;
    listen(renderElement: NgView, eventName: string, callback: Function): Function;
    listenGlobal(target: string, eventName: string, callback: Function): Function;
    animate(element: any, startingStyles: AnimationStyles, keyframes: AnimationKeyframe[], duration: number, delay: number, easing: string): AnimationPlayer;
}
