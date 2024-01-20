import { ArticleRecommendations } from '../../../../../components/Recomendations';
import { UtilArticle } from '../../../../../components/UtilArticle';
import {
  eCanBeEmptyObject,
  eGetNoReadonlyKeys,
  eGetOptionalKeys,
  eGetReadonlyKeys,
  eGetRequiredKeys,
  eHasProperty,
  eIsObject,
  eIsStrictObject,
  eModify,
  eModifyByKey,
  ePickByValue,
  ePrettify,
  eSomeToPartial,
  eSomeToReadonly,
  eSomeToRequired,
  eSomeToWritable,
} from './examples';

export default () => {
  return <article>
    <h1>Object Type Utilities</h1>
    <p>Utilities for manipulating and evaluating object types in TypeScript</p>

    <UtilArticle name="isObject" example={eIsObject}>
      Evaluates if the specified type is an object, array, or function.
    </UtilArticle>

    <UtilArticle name="isStrictObject" example={eIsStrictObject}>
      Evaluates if the specified type is strictly an object, ignoring arrays and functions.
    </UtilArticle>

    <UtilArticle name="modify" example={eModify}>
      Allows modifying interfaces or object types without the restrictions of using extends or & operator.
    </UtilArticle>

    <UtilArticle name="modifyByKey" example={eModifyByKey}>
      Modifies interfaces or object types by creating a Union Discriminated Type with the overrides and the keys passed for modifying the object.
    </UtilArticle>

    <UtilArticle name="prettify" example={ePrettify}>
      Recreates complex types for readability without changing the original type.
    </UtilArticle>

    <UtilArticle name="pickByValue" example={ePickByValue}>
      Picks properties from an object type whose values match any of the specified types.
    </UtilArticle>

    <UtilArticle name="canBeEmptyObject" example={eCanBeEmptyObject}>
      Evaluates if the object can be an empty object (`{}`).
    </UtilArticle>

    <UtilArticle name="getReadonlyKeys" example={eGetReadonlyKeys}>
      Returns the keys of an object which are readonly.
    </UtilArticle>

    <UtilArticle name="getNoReadonlyKeys" example={eGetNoReadonlyKeys}>
      Returns the keys of an object which are not readonly.
    </UtilArticle>

    <UtilArticle name="getRequiredKeys" example={eGetRequiredKeys}>
      Identifies the required keys of an object.
    </UtilArticle>

    <UtilArticle name="getOptionalKeys" example={eGetOptionalKeys}>
      Identifies the optional keys of an object.
    </UtilArticle>

    <UtilArticle name="hasProperty" example={eHasProperty}>
      Determines if the object has a specific property.
    </UtilArticle>

    <UtilArticle name="someToReadonly" example={eSomeToReadonly}>
      Converts specific properties of an object to readonly.
    </UtilArticle>

    <UtilArticle name="someToWritable" example={eSomeToWritable}>
      Removes readonly from specific properties of an object.
    </UtilArticle>

    <UtilArticle name="someToPartial" example={eSomeToPartial}>
      Converts specific properties of an object to optional.
    </UtilArticle>

    <UtilArticle name="someToRequired" example={eSomeToRequired}>
      Makes specific properties of an object required.
    </UtilArticle>

    <ArticleRecommendations links={[
      'numbers',
      'promises',
      'arrays',
      'hkt',
      'generals',
      'utils-description',
    ]} />
  </article>;
};