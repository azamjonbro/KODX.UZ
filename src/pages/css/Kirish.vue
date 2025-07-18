<template >
 <div>
  <h1 class="text-3xl font-bold mb-4">CSS Box Model</h1>
  <p class="mb-4">
    The CSS box model is a fundamental concept in web design and development that describes how elements are structured and displayed on a web page. It consists of the following components:
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Content:</strong> The actual content of the element, such as text or images.</li>
    <li><strong>Padding:</strong> The space between the content and the border, which can be used to create visual separation.</li>
    <li><strong>Border:</strong> A line that surrounds the padding and content, providing a visual boundary.</li>
    <li><strong>Margin:</strong> The outermost space that separates the element from other elements on the page.</li>
  </ul>
  <p class="mb-4">
    Understanding the box model is crucial for controlling layout, spacing, and overall design in CSS.
  </p>
  <h2 class="text-2xl font-semibold mb-2">Example</h2>
  <pre class="bg-gray-100 p-4 rounded">
    <code>
      .box {
        width: 300px;
        padding: 20px;
        border: 5px solid #333;
        margin: 10px;
      }
    </code>
  </pre>
 </div>
</template>
<script> 
export default {
  name: "BoxModel"
}
</script>

<style>
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
}
</style>